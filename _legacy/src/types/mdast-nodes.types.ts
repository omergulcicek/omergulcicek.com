export interface MdastTextNodeType {
	type: "text"
	value: string
}

export interface MdastJsxAttributeType {
	type: "mdxJsxAttribute"
	name: string
	value: string | number | boolean | null
}

export interface MdastJsxTextElementType {
	type: "mdxJsxTextElement"
	name: string
	attributes: MdastJsxAttributeType[]
	children: MdastNodeType[]
}

export interface MdastParagraphNodeType {
	type: "paragraph"
	children: MdastNodeType[]
}

export type MdastNodeType =
	| MdastTextNodeType
	| MdastJsxTextElementType
	| MdastParagraphNodeType
