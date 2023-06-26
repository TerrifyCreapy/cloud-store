export interface IBrowserRouter {
    path: string;
    exact: boolean;
    element: unknown;
    outlet?: IBrowserRouter[];
}