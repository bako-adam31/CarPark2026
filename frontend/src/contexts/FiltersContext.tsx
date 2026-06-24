import { createContext, type Dispatch, type SetStateAction } from "react";
import type { SortOrder } from "../data/car";
import type { Car } from "../models/car";

export type Filters = {
    manufacturer: string
    model: string
    fuelType: string
    gearbox: string
}

export type FiltersContextType = {
    page: number;
    setPage: Dispatch<SetStateAction<number>>;
    limit: number;
    setLimit: Dispatch<SetStateAction<number>>;
    sort: keyof Car | undefined;
    setSort: Dispatch<SetStateAction<keyof Car | undefined>>;
    order: SortOrder;
    setOrder: Dispatch<SetStateAction<SortOrder>>;
    filters: Filters;
    setFilters: React.Dispatch<React.SetStateAction<Filters>>;
    updateFilter: (field: keyof Filters, value: string) => void;
    resetFilters: () => void;
    showFavoritesOnly: boolean;
    handleFavoritesToggle: (checked: boolean) => void;
}

export const FiltersContext = createContext<FiltersContextType | undefined>(undefined)