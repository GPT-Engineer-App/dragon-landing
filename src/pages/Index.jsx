import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const Index = () => {
  const keyFacts = [
    { title: "Population", value: "1.4 billion" },
    { title: "Capital", value: "Beijing" },
    { title: "Language", value: "Mandarin" },
    { title: "Currency", value: "Renminbi (Yuan)" },
  ];

  const images = [
    { src: "/placeholder.svg", alt: "Great Wall of China" },
    { src: "/placeholder.svg", alt: "Forbidden City" },
    { src: "/placeholder.svg", alt: "Terracotta Army" },
    { src: "/placeholder.svg", alt: "Li River" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Discover China</h1>
        <p className="text-xl text-muted-foreground">A Journey Through the Middle Kingdom</p>
      </header>

      <section className="mb-12">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p>
            China, officially the People's Republic of China, is a country in East Asia. 
            It is the world's most populous country, with a population of more than 1.4 billion.
          </p>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Key Facts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {keyFacts.map((fact, index) => (
            <Card key={index} className="p-4">
              <h3 className="font-semibold">{fact.title}</h3>
              <p>{fact.value}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Button variant="outline" className="p-0 w-full h-auto aspect-video">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto"
                />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </section>

      <footer className="text-center text-sm text-muted-foreground">
        © 2024 Discover China. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;