export function ViraPasswordDemoFallback() {
	return (
		<div className="blog-password-interactive-demo blog-password-interactive-demo--fallback">
			<div className="blog-password-interactive-demo__field">
				<label className="blog-password-interactive-demo__label">
					Temel (ikon)
				</label>
				<div className="blog-password-interactive-demo__control">
					<input
						className="blog-password-interactive-demo__input"
						type="password"
						defaultValue="virastack"
						readOnly
						tabIndex={-1}
						aria-hidden
					/>
					<button
						type="button"
						className="blog-password-interactive-demo__toggle"
						tabIndex={-1}
						aria-hidden
					>
						••
					</button>
				</div>
				<span className="blog-password-interactive-demo__status">
					Durum: gizli
				</span>
			</div>
			<div className="blog-password-interactive-demo__field">
				<label className="blog-password-interactive-demo__label">
					Özel metin
				</label>
				<div className="blog-password-interactive-demo__control">
					<input
						className="blog-password-interactive-demo__input blog-password-interactive-demo__input--text"
						type="password"
						defaultValue="virastack"
						readOnly
						tabIndex={-1}
						aria-hidden
					/>
					<button
						type="button"
						className="blog-password-interactive-demo__toggle blog-password-interactive-demo__toggle--text"
						tabIndex={-1}
						aria-hidden
					>
						Göster
					</button>
				</div>
				<span className="blog-password-interactive-demo__status">
					Durum: gizli
				</span>
			</div>
		</div>
	)
}
