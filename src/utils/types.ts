export interface Services {
  title: string;
  icon: React.ReactNode;
}

export type NavLinkData =
  | {
      attendance: {
        title: string;
        date: string;
      };
    }
  | {
      working: {
        title: string;
        time: string;
      };
    }
  | {
      user: {
        title: string;
        name: string;
        profile: React.ReactNode;
        icon: React.ReactNode;
        options: string[];
      };
    };

export interface Cards {
  id: string;
  icon: string;
  title: string;
  value: number | string;
  percentChange: string;
}

export interface TableType {
  date: string;
  employee: string;
  role: string;
  status: "present" | "Absent" | "Late";
  checkIn: string;
  checkOut: string;
  overtime: string;
}
