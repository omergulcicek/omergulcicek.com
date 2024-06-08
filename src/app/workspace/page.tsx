"use client";

import Container from "@/shared/container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/tabs";

const deskWorkspace = [
  {
    name: "Laptop",
    image: "https://omergulcicek.com/img/desk/apple-macbook.png",
    alt: "Apple Macbook Pro M1 13 inch",
    description: 'Apple Macbook Pro M1, 13"',
  },
  {
    name: "Monitör",
    image: "https://omergulcicek.com/img/desk/samsung-space.png",
    alt: "Samsung Space 32' 4K Monitör",
    description: 'Samsung Space 32" 4K',
  },
  {
    name: "Koltuk",
    image: "https://omergulcicek.com/img/desk/adore-chair.png",
    description: "Adore Manager Techno",
  },
  {
    name: "Masa",
    image: "https://omergulcicek.com/img/desk/nurus-desk.png",
    alt: "Nurus Otto Basic",
    description: "Nurus Otto Basic",
  },
  {
    name: "Kablosuz Kulaklık",
    image: "https://omergulcicek.com/img/desk/logitech-headphone.png",
    alt: "Logitech G733",
    description: "Logitech G733",
  },
  {
    name: "Mekanik Klavye",
    image: "https://omergulcicek.com/img/desk/logitech-keyboard.png",
    alt: "Logitech G513 Carbon",
    description: "Logitech G513 Carbon",
  },
];

export default function Workspace() {
  return (
    <Container className="mt-10 md:mt-24 max-w-2xl">
      <p className="text-lg leading-8 text-neutral-500 my-2">
        Gün içinde ve çalışma hayatında sürekli kullandığım araçların listesi
      </p>

      <Tabs defaultValue="desk" className="mt-20 w-full">
        <TabsList className="grid grid-cols-5">
          <TabsTrigger value="desk">Masa</TabsTrigger>
          <TabsTrigger value="dairy">Günlük</TabsTrigger>
          <TabsTrigger value="photo">Fotoğraf</TabsTrigger>
          <TabsTrigger value="home">Ev</TabsTrigger>
          <TabsTrigger value="gaming">Oyun</TabsTrigger>
        </TabsList>

        <TabsContent value="desk" className="mt-10">
          <div className="grid grid-cols-3 gap-y-20">
            {deskWorkspace.map(({ name, image, description }) => (
              <figure className="flex flex-col items-center justify-center">
                <strong>{name}</strong>
                <img
                  src={image}
                  alt={description}
                  height={160}
                  width={160}
                  className="h-40 object-contain my-2"
                />

                <figcaption className="text-sm">{description}</figcaption>
              </figure>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="dairy">
          <div className="grid grid-cols-5"></div>
        </TabsContent>
        <TabsContent value="photo">Change your password here.</TabsContent>
        <TabsContent value="home">Change your password here.</TabsContent>
        <TabsContent value="gaming">Change your password here.</TabsContent>
      </Tabs>
    </Container>
  );
}
