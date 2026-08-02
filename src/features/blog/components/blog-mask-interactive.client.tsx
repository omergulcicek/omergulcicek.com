import { getCardType, useViraMask } from "@virastack/mask"
import { useForm } from "react-hook-form"

import { BlogMaskFieldMeta } from "@/features/blog/components/blog-mask-field-meta"

type CreditCardForm = {
	card: string
	expiry: string
	cvv: string
}

export function BlogViraMaskDemoClient() {
	const form = useForm<CreditCardForm>({
		defaultValues: { card: "", expiry: "", cvv: "" },
		mode: "onChange"
	})

	const { card, expiry, cvv } = useViraMask({
		form,
		schema: {
			card: {
				preset: "card",
				errorMessage: "Geçersiz kart numarası"
			},
			expiry: {
				preset: "expiry",
				errorMessage: "Geçersiz son kullanma tarihi"
			},
			cvv: "cvv"
		}
	})

	const { rawValue: cardRaw, value: cardValue, ...cardProps } = card
	const { rawValue: expiryRaw, value: expiryValue, ...expiryProps } = expiry
	const { rawValue: cvvRaw, value: cvvValue, ...cvvProps } = cvv

	const cardType = getCardType(cardRaw)
	const errors = form.formState.errors

	return (
		<div className="blog-mask-interactive-demo">
			<div className="blog-mask-interactive-demo__field">
				<div className="blog-mask-interactive-demo__label-row">
					<label
						className="blog-mask-interactive-demo__label"
						htmlFor="blog-mask-card"
					>
						Kart numarası
					</label>
					{cardType !== "unknown" ? (
						<span className="blog-mask-interactive-demo__badge">{cardType}</span>
					) : null}
				</div>
				<input
					id="blog-mask-card"
					className="blog-mask-interactive-demo__input"
					placeholder="0000 0000 0000 0000"
					aria-invalid={Boolean(errors.card)}
					{...cardProps}
					value={cardValue}
				/>
				{errors.card ? (
					<p className="blog-mask-interactive-demo__error" role="alert">
						{String(errors.card.message ?? "Geçersiz kart numarası")}
					</p>
				) : null}
				<BlogMaskFieldMeta rawValue={cardRaw} value={cardValue} />
			</div>

			<div className="blog-mask-interactive-demo__row">
				<div className="blog-mask-interactive-demo__field">
					<label
						className="blog-mask-interactive-demo__label"
						htmlFor="blog-mask-expiry"
					>
						Son kullanma
					</label>
					<input
						id="blog-mask-expiry"
						className="blog-mask-interactive-demo__input"
						placeholder="12/28"
						aria-invalid={Boolean(errors.expiry)}
						{...expiryProps}
						value={expiryValue}
					/>
					{errors.expiry ? (
						<p className="blog-mask-interactive-demo__error" role="alert">
							{String(errors.expiry.message ?? "Geçersiz son kullanma tarihi")}
						</p>
					) : null}
					<BlogMaskFieldMeta rawValue={expiryRaw} value={expiryValue} />
				</div>

				<div className="blog-mask-interactive-demo__field">
					<label
						className="blog-mask-interactive-demo__label"
						htmlFor="blog-mask-cvv"
					>
						CVV
					</label>
					<input
						id="blog-mask-cvv"
						className="blog-mask-interactive-demo__input"
						placeholder={cardType === "amex" ? "1234" : "123"}
						{...cvvProps}
						value={cvvValue}
					/>
					<BlogMaskFieldMeta rawValue={cvvRaw} value={cvvValue} />
				</div>
			</div>
		</div>
	)
}
