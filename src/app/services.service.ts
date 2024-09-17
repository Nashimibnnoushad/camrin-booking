import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'https://portal.camrinfilms.com:2000/portal/v1';
  sessionDuration = 60 * 60 * 1000; // 1 hour in milliseconds

  constructor(private http: HttpClient) { }

  public getSessionData(key: string): any | null {
    const data = sessionStorage.getItem(`${key}_data`);
    const timestampString = sessionStorage.getItem(`${key}_timestamp`);
    const timestamp = timestampString ? parseInt(timestampString, 10) : NaN;
    const now = new Date().getTime();

    if (data) {
        // Check if the timestamp is a valid number and the session has not expired
        if (!isNaN(timestamp) && now - timestamp < this.sessionDuration) {
            return JSON.parse(data);
        } else {
            // Session expired or invalid timestamp
            sessionStorage.removeItem(`${key}_data`);
            sessionStorage.removeItem(`${key}_timestamp`);
            return null; // or handle session expiration as needed
        }
    }
    return null; // No data found
} 
  token: any = this.getSessionData('camrinToken');
  getEventList(): Observable<any[]> {
    const headers = new HttpHeaders({
      // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJtZW1iZXJzaGlwTnVtYmVyIjoxNDQ4NDMsInJvbGUiOiJtZW1iZXIiLCJlbWFpbCI6ImplcmFsZEBnbWFpbC5jb20iLCJzdWIiOiJqZXJhbGRAZ21haWwuY29tIiwiaWF0IjoxNzI0NDM0NzY1LCJleHAiOjE3MjQ0MzgzNjV9.aFCBKNMg05_Jl4C3trzt4V6o8NM5kyZLopOk0X-7t_8',
      'Content-Type': 'application/json'
    });
    return this.http.get<any[]>(`${this.apiUrl}/event/list-event`, { headers });
  }

  getServices(): Observable<any[]> {
    const headers = new HttpHeaders({
      // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJtZW1iZXJzaGlwTnVtYmVyIjoxNDQ4NDMsInJvbGUiOiJtZW1iZXIiLCJlbWFpbCI6ImplcmFsZEBnbWFpbC5jb20iLCJzdWIiOiJqZXJhbGRAZ21haWwuY29tIiwiaWF0IjoxNzI0NDM0NzY1LCJleHAiOjE3MjQ0MzgzNjV9.aFCBKNMg05_Jl4C3trzt4V6o8NM5kyZLopOk0X-7t_8',
      'Content-Type': 'application/json'
    });
    return this.http.get<any[]>(`${this.apiUrl}/service/list-services`, { headers });
  }

  clientLogin(post: any): Observable<any[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<any[]>(`${this.apiUrl}/membership/login`, post, { headers });
  }

  clientRegister(post: any): Observable<any[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<any[]>(`${this.apiUrl}/enrolment`, post, { headers });
  }

  getPackages(post: any): Observable<any[]> {
    const headers = new HttpHeaders({
      'Auth-Token': this.token,
      'Content-Type': 'application/json'
    });
    return this.http.post<any[]>(`${this.apiUrl}/package/generate-package`, post, { headers });
  }

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/posts`);
  }

  getPostById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/posts/${id}`);
  }

  addPost(post: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/posts`, post);
  }

  updatePost(id: number, post: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/posts/${id}`, post);
  }

  deletePost(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/posts/${id}`);
  }
}