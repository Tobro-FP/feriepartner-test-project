## Implementation Summary

**Architecture & Patterns:**

- Container/Presentational pattern: `EmployeeContainer` manages state/logic, `EmployeeList` and `EmployeeDetails` are presentational
- Custom `useFetch` hook following `@tanstack/react-query` pattern for API integration
- URL as single source of truth for selected employee state

**Routing:**

- `/employees` - employee list with dropdown
- `/employee/:id` - employee list with selected employee details
- Direct URL navigation supported with pre-selection

**Performance Optimizations:**

- `React.memo` on presentational components
- `useCallback` for stable function references
- `useMemo` for computed values (selectedEmployee, selectedId)
- Make sure to fetch employee list only once

**Type Safety:**

- `Employee.id` accepts `string | number` for json-server compatibility (json-server returns string IDs in some cases and number IDs in other cases)
- All IDs converted to strings for consistent comparison
- No `any` types used

**Error Handling:**

- Loading state
- Fetch errors
- Empty employee list
- Invalid employee ID in URL

**Styling:**

- Tailwind CSS
- Prettier with 120-character line width

**Code Style:**

- Named exports throughout
- Functions declared as constants
- TypeScript strict mode
