import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as Constants from "../../common/constants";
import { Observable } from "rxjs";
import { User } from "src/app/component/user-list/user";

@Injectable({
  providedIn: "root",
})
export class ModalService {
  private getEmployeesUrl = Constants.BaseUrl + Constants.getEmployeeById;
  private deleteEmployeesUrl = Constants.BaseUrl + Constants.deleteEmployee;
  private updateEmployeeUrl = Constants.BaseUrl + Constants.updateEmployee;
  constructor(private httpClient: HttpClient) {}
  modalAction(modalData: any) {
    switch (modalData.name) {
      case "editEmployee":
        this.updateEmployee(modalData);
        break;

      case "deleteEmployee":
        this.deleteEmployee(modalData);
        break;

      default:
        break;
    }
  }

  public updateEmployee(employee: User): Observable<any> {
    console.log("I came from a update modal");
    return this.httpClient.post<any>(
      `${this.updateEmployeeUrl}${employee.id}`,
      employee
    );
  }

  public deleteEmployee(modalData: any) {
    /* return this.httpClient.delete(
      this.deleteEmployeesUrl + "id=" + modalData.data.employeeId
    ); */
    console.log("I came from a update modal" + modalData.employeeId);
  }

  public getEmployeeById(employeeId: string): Observable<any> {
    return this.httpClient.get(this.getEmployeesUrl + "id=" + employeeId);
  }
}
