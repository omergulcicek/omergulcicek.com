import type { ReactNode } from "react"

type MdxTableProps = { headers: readonly ReactNode[]; rows: readonly (readonly ReactNode[])[] }

/**
 * `<MdxTable>`: a table whose cells can hold links. Scrolls inside its own box on narrow
 * screens, so the page itself never scrolls sideways.
 */
export function MdxTable({ headers, rows }: MdxTableProps) {
  return (
    <div className="not-prose my-6 overflow-x-auto rounded-xl border border-border">
      <table className="w-full border-collapse text-left text-sm">
        <thead className="bg-muted">
          <tr>
            {headers.map((header, index) => (
              <th
                // Headers have no ids; their position is stable for a given table.
                key={index}
                scope="col"
                className="border-b border-border px-4 py-2 font-medium whitespace-nowrap"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b border-border last:border-b-0">
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-4 py-2 align-top text-pretty text-foreground [&_a]:font-medium [&_a]:text-foreground [&_a]:underline [&_a]:decoration-brand/50 [&_a]:underline-offset-4 [&_a:hover]:decoration-brand"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
