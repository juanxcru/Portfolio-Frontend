import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";
import { environment } from "../../../environments/environment"; 


export interface ProjectInfo {

    id: number; 
    name: string;
    html_url: string;
    homepage: string;
    description: string;
    topics: string[];

}


type LoadState = 'idle' | 'loading' | 'loaded' | 'error';


@Injectable({providedIn: 'root'})
export class ProjectInfoStore {

    private readonly http = inject(HttpClient);


    private _projectsInfo = signal<ProjectInfo[]>([]); 
    readonly projectsInfo = this._projectsInfo.asReadonly();

    private readonly _state = signal<LoadState>('loading');
    readonly state = this._state.asReadonly();


    constructor(){
         this.loadProjectsInfo();
    }
    

    private loadProjectsInfo(){
        
        const projectsInfoSaved = sessionStorage.getItem('projects');

        if(projectsInfoSaved){
            this._projectsInfo.set(JSON.parse(projectsInfoSaved));
            this._state.set('loaded');
            return;
        }

        this.getProjectsInfoFromBackend();

    }


    private getProjectsInfoFromBackend(){
        try{

            this._state.set('loading');
            this.http.get<ProjectInfo[]>(`${environment.backendUrl}/projects`).subscribe({
                next: (data) => {
                    this.formatProjectTitles(data);
                    this._projectsInfo.set(data);
                    sessionStorage.setItem('projects', JSON.stringify(data));
                    this._state.set('loaded');
                },
                error: (error: HttpErrorResponse) => {
                    
                    if(error.status === 502){
                        console.info("Trying again, free backend jeje");

                        this.http.get<ProjectInfo[]>(`${environment.backendUrl}/projects`).subscribe({
                        next: (data) => {
                            this.formatProjectTitles(data);
                            this._projectsInfo.set(data);
                            sessionStorage.setItem('projects', JSON.stringify(data));
                            this._state.set('loaded');
                        },
                        error: () => {
                            console.error('error trying again to get projects from BE');
                            this._state.set('loading');
                        }
                        });
                        return;          
                    }
                
                    console.error('error trying again to get projects from BE');
                    this._state.set('loading');
                }
                    
            });
            
        }catch (e){
            console.error("error: ",String(e));
            this._state.set('error');
        }
        
    }

    private formatProjectTitles(data:ProjectInfo[]) {
        
        data.forEach((v) =>{
            v.name = v.name.replaceAll("-", " ");
            
        } );
        
    }

}
