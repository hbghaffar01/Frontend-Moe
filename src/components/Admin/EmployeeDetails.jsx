import React from "react";
import { Card, CardContent, CardHeader } from "../../components/ui/card";
import { Label } from "../../components/ui/label";
import { Badge } from "../../components/ui/badge";

const EmployeeDetails = ({ employeeDetails }) => {
  return (
    <div className="bg-white rounded p-4 flex items-center flex-col gap-6">
      <Card className="bg-secondary w-full">
        <CardHeader className="w-full">
          <div className="flex items-center justify-between space-x-4">
            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-medium">
                {employeeDetails.user.name}
              </h3>
              <p className="text-gray-500">
                {employeeDetails.user.designation}
              </p>
            </div>
            <div className="p-3 bg-white rounded-full">
              <img
                src={employeeDetails.user.image || "/placeholder.jpg"}
                alt={employeeDetails.user.name}
                className="h-16 w-16 rounded-full"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p>{employeeDetails.user.work}</p>
        </CardContent>
      </Card>
      <Card className="w-full">
        <CardHeader></CardHeader>
        <CardContent className="w-full">
          <div className="grid grid-cols-2 gap-4">
            {employeeDetails?.personalInfo.map((info, index) => (
              <div key={index}>
                <Label>{info.label}</Label>
                <p>{info.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <Label>Attendance</Label>
            <div className="flex items-center justify-between">
              <div>
                <Badge variant="primary">
                  Present: {employeeDetails.attendance.percentage.present}
                </Badge>
                <Badge variant="danger">
                  Absent: {employeeDetails.attendance.percentage.absent}
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmployeeDetails;
