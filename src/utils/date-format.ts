import dayjs from "dayjs"

import "dayjs/locale/tr"

dayjs.locale("tr")

export function dateFormat(date: string) {
	return dayjs(date).locale("tr").format("DD MMMM YYYY")
}
