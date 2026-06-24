import { useFilters } from "../../hooks/useFilters"
import "./FiltersPanel.css"

export function FiltersPanel() {
    const { filters, updateFilter, showFavoritesOnly, handleFavoritesToggle } = useFilters()

    return (
        <div className="filtersPanel">
            <h3>Search & Filter</h3>
            <input
                type="text"
                placeholder="Manufacturer"
                value={filters.manufacturer}
                onChange={(e) => updateFilter("manufacturer", e.target.value)}
            />
            <input
                type="text"
                placeholder="Model"
                value={filters.model}
                onChange={(e) => updateFilter("model", e.target.value)}
            />
            <input
                type="text"
                placeholder="Fuel Type"
                value={filters.fuelType}
                onChange={(e) => updateFilter("fuelType", e.target.value)}
            />
            <input
                type="text"
                placeholder="Gearbox"
                value={filters.gearbox}
                onChange={(e) => updateFilter("gearbox", e.target.value)}
            />
            <label className="checkbox">
                <input
                    type="checkbox"
                    checked={showFavoritesOnly}
                    onChange={(e) => handleFavoritesToggle(e.target.checked)}
                />
                Show only favorites
            </label>
        </div>
    )
}
