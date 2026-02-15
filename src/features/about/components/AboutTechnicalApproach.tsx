"use client"

import { Section, Stack } from "@/shared"

export function AboutTechnicalApproach() {
	return (
		<Section title="Teknik Yaklaşım" type="h2">
			<p>
				Modern frontend mimarisinin farklı katmanlarında çalışıyor;{" "}
				<span className="text-primary">
					ölçeklenebilir, tip güvenliği yüksek ve uzun vadede sürdürülebilir
					yapılar
				</span>{" "}
				kuruyorum. Uygulama mimarisini, component tasarımını, state yönetimini
				ve veri akışını bütüncül bir yaklaşımla ele alarak ekiplerin rahatça
				büyütebileceği net, düzenli ve kontrol edilebilir sistemler oluşturmayı
				önemsiyorum.
			</p>

			<p>
				<span className="text-primary">
					Performans, DX odaklı geliştirme ve temiz, ölçeklenebilir bir folder
					structure
				</span>{" "}
				benim için temel prensipler arasında. Karmaşık yapıları anlaşılır hâle
				getirmeye, teknik borcu azaltmaya ve projelere güçlü bir mimari temel
				oluşturmaya odaklanıyorum. Çalışırken{" "}
				<span className="text-primary">
					netlik, sadelik ve sürdürülebilirlik
				</span>{" "}
				merkezli bir yaklaşım benimsiyorum.
			</p>

			<div className="py-4">
				<Stack />
			</div>
		</Section>
	)
}
