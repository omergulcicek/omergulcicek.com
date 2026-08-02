import { useViraPassword } from "@virastack/password"

function PasswordField({
	label,
	variant
}: {
	label: string
	variant: "basic" | "custom-text"
}) {
	const isTextToggle = variant === "custom-text"

	const { inputProps, btnProps, isVisible } = useViraPassword({
		id: `blog-password-${variant}`,
		defaultVisible: false,
		icons: isTextToggle
			? {
					show: "Göster",
					hide: "Gizle"
				}
			: undefined,
		inputProps: {
			autoComplete: "current-password",
			defaultValue: "virastack",
			placeholder: "Şifrenizi girin",
			className: [
				"blog-password-interactive-demo__input",
				isTextToggle ? "blog-password-interactive-demo__input--text" : null
			]
				.filter(Boolean)
				.join(" ")
		},
		btnProps: {
			className: [
				"blog-password-interactive-demo__toggle",
				isTextToggle ? "blog-password-interactive-demo__toggle--text" : null
			]
				.filter(Boolean)
				.join(" ")
		}
	})

	const { className: btnClassName, children, ...restBtnProps } = btnProps

	return (
		<div className="blog-password-interactive-demo__field">
			<label
				className="blog-password-interactive-demo__label"
				htmlFor={`blog-password-${variant}`}
			>
				{label}
			</label>
			<div className="blog-password-interactive-demo__control">
				<input {...inputProps} />
				<button {...restBtnProps} className={btnClassName}>
					{children}
				</button>
			</div>
			<span className="blog-password-interactive-demo__status">
				Durum: {isVisible ? "görünür" : "gizli"}
			</span>
		</div>
	)
}

export function BlogViraPasswordDemoClient() {
	return (
		<div className="blog-password-interactive-demo">
			<PasswordField label="Temel (ikon)" variant="basic" />
			<PasswordField label="Özel metin" variant="custom-text" />
		</div>
	)
}
