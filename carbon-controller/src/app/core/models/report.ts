export class Report {
    public name: string;
    public id: number;
    public headers: string[];
    public rows: { [key: string]: any }[];
}
