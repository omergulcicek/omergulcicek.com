import { PasswordField } from "@/features/blog/components/PasswordField.client"

export function BlogViraPasswordDemoClient() {
	return (
		<div className="blog-password-interactive-demo">
			<PasswordField label="Temel (ikon)" variant="basic" />
			<PasswordField label="Özel metin" variant="custom-text" />
		</div>
	)
}
