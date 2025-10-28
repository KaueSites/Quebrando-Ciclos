"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle2,
  Repeat,
  Search,
  Lightbulb,
  Brain,
  Target,
  Heart,
  ArrowRight,
  Shield,
  Star,
  Users,
  BookOpen,
  Clock,
  Download,
  ChevronDown,
  Zap,
} from "lucide-react"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [showFloatingButton, setShowFloatingButton] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      setShowFloatingButton(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const checkoutLink = "https://quebrando-ciclos.shop"

  const chapters = [
    {
      title: "Entendendo os Ciclos",
      desc: "Identifique os padrões invisíveis que controlam suas decisões e comportamentos diários.",
      icon: Repeat,
      image: "/entendendo-ciclos.png",
    },
    {
      title: "A Raiz do Problema",
      desc: "Descubra as causas profundas que mantêm você preso aos mesmos resultados.",
      icon: Search,
      image: "/raiz-do-problema.png",
    },
    {
      title: "Clareza Mental",
      desc: "Aprenda técnicas práticas para organizar seus pensamentos e tomar decisões melhores.",
      icon: Lightbulb,
      image: "/clareza-mental-chapter.jpg",
    },
    {
      title: "Dominando Sua Mente",
      desc: "Desenvolva estratégias comprovadas de controle mental e foco sustentado.",
      icon: Brain,
      image: "/dominando-sua-mente.jpg",
    },
    {
      title: "Construindo Disciplina",
      desc: "O sistema passo a passo para criar hábitos que transformam sua vida.",
      icon: Target,
      image: "/construindo-disciplina.jpg",
    },
    {
      title: "Vivendo com Propósito",
      desc: "Mantenha a mudança a longo prazo e construa uma vida com significado real.",
      icon: Heart,
      image: "/heart-purpose-meaningful-life-journey-minimal-warm.jpg",
    },
  ]

  const pillars = [
    {
      title: "Clareza",
      desc: "Saber exatamente para onde você está indo e por que isso importa. Sem clareza, você está apenas ocupado, não produtivo.",
      image: "/clareza-mental.jpg",
    },
    {
      title: "Controle Mental",
      desc: "Observar seus pensamentos sem se identificar com eles. Você não é seus pensamentos — você é quem os observa.",
      image: "/controle-mental.jpg",
    },
    {
      title: "Disciplina Consistente",
      desc: "Pequenas escolhas diárias que se acumulam ao longo do tempo. A transformação não vem de grandes gestos, mas de micro-decisões.",
      image: "/disciplina-consistente-pillar.png",
    },
  ]

  const weeks = [
    {
      week: "Semana 1",
      theme: "Consciência",
      desc: "Identifique seus padrões automáticos",
    },
    {
      week: "Semana 2",
      theme: "Intervenção",
      desc: "Interrompa os ciclos negativos",
    },
    {
      week: "Semana 3",
      theme: "Novo Padrão",
      desc: "Construa novos comportamentos",
    },
    {
      week: "Semana 4",
      theme: "Consolidação",
      desc: "Torne a mudança permanente",
    },
  ]

  const testimonials = [
    {
      name: "Maria Silva",
      role: "Empreendedora",
      content:
        "Depois de anos tentando mudar, finalmente entendi o que me prendia. Este guia me deu clareza e um plano real de ação.",
      rating: 5,
    },
    {
      name: "João Santos",
      role: "Desenvolvedor",
      content:
        "Não é mais um livro de autoajuda genérico. É prático, direto e realmente funciona. Minha vida mudou em 30 dias.",
      rating: 5,
    },
    {
      name: "Ana Costa",
      role: "Professora",
      content:
        "A abordagem sobre controle mental foi reveladora. Aprendi a observar meus pensamentos sem me identificar com eles.",
      rating: 5,
    },
  ]

  const faqs = [
    {
      question: "Este guia é para mim?",
      answer:
        "Se você sente que está preso nos mesmos padrões, procrastina constantemente, ou quer construir disciplina real, sim. Este guia é para quem está pronto para mudança real, não motivação temporária.",
    },
    {
      question: "Quanto tempo leva para ver resultados?",
      answer:
        "O plano de ação é de 30 dias, mas muitas pessoas relatam mudanças significativas já na primeira semana. A chave é a consistência, não a perfeição.",
    },
    {
      question: "Como funciona a garantia?",
      answer:
        "Você tem 5 dias para ler e aplicar o conteúdo. Se não estiver satisfeito por qualquer motivo, basta solicitar reembolso total — sem perguntas, sem complicações.",
    },
    {
      question: "Preciso de conhecimento prévio?",
      answer:
        "Não. O guia é escrito em linguagem clara e direta, com exemplos práticos. Qualquer pessoa pode começar imediatamente.",
    },
    {
      question: "Como recebo o eBook?",
      answer:
        "Imediatamente após a compra, você recebe um email com o link de download. O eBook está em formato PDF, compatível com qualquer dispositivo.",
    },
    {
      question: "Quais formas de pagamento são aceitas?",
      answer:
        "Aceitamos apenas pagamento via PIX para garantir processamento instantâneo e acesso imediato ao conteúdo. Após o pagamento, você recebe o eBook em segundos.",
    },
  ]

  const bonuses = [
    {
      title: "Planilha de Rastreamento de Hábitos",
      desc: "Acompanhe seu progresso diário e visualize sua transformação",
      icon: CheckCircle2,
    },
    {
      title: "Guia de Meditação para Iniciantes",
      desc: "5 técnicas simples para desenvolver controle mental",
      icon: Brain,
    },
    {
      title: "Checklist de Ação Diária",
      desc: "Micro-ações práticas para cada dia do plano de 30 dias",
      icon: Target,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-lg shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex h-16 items-center justify-between">
            <div className="text-xl font-bold text-foreground">Quebre o Ciclo</div>
            <Button asChild size="sm" className="shadow-lg hover:shadow-xl transition-all">
              <a href="#comprar" className="flex items-center gap-2">
                <span className="hidden sm:inline">Apenas</span> R$ 29,99
                <Zap className="h-4 w-4" />
              </a>
            </Button>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-background to-accent/20">
          <div className="container mx-auto px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div
                className={`transition-all duration-1000 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              >
                <div className="mb-6 flex flex-wrap items-center gap-3">
                  <Badge className="bg-accent text-accent-foreground px-4 py-1.5 text-sm">Transformação Pessoal</Badge>
                  <Badge className="bg-primary text-primary-foreground px-4 py-1.5 text-sm animate-pulse">
                    🔥 Promoção Limitada
                  </Badge>
                </div>

                <h1 className="text-balance text-5xl font-extrabold leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                  Quebre o Ciclo e Transforme Sua Vida
                </h1>

                <p className="mt-8 max-w-2xl text-pretty text-xl leading-relaxed text-muted-foreground sm:text-2xl">
                  Descubra como encontrar clareza mental, dominar sua mente e construir disciplina duradoura.
                </p>

                <div className="mt-10 rounded-2xl border-2 border-primary bg-gradient-to-br from-primary/10 to-accent/20 p-6 shadow-xl">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="mb-2 flex items-center gap-3">
                        <span className="text-lg text-muted-foreground line-through">De R$ 110,00</span>
                        <Badge className="bg-destructive text-destructive-foreground">-73%</Badge>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm text-muted-foreground">Por apenas</span>
                        <span className="text-5xl font-extrabold text-primary">R$ 29,99</span>
                      </div>
                      <div className="mt-2 flex items-center gap-2 text-sm font-medium text-foreground">
                        <Zap className="h-4 w-4 text-primary" />
                        Pagamento via PIX • Acesso Instantâneo
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="h-16 px-10 text-lg shadow-2xl transition-all hover:scale-105 hover:shadow-primary/50"
                    id="comprar"
                  >
                    <a href={checkoutLink} className="flex items-center gap-2">
                      Garantir Minha Vaga
                      <ArrowRight className="h-5 w-5" />
                    </a>
                  </Button>
                </div>

                <div className="mt-6 flex items-center gap-2 text-base text-muted-foreground">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="font-medium">Garantia de 5 dias — sua transformação começa sem risco</span>
                </div>
              </div>

              <div
                className={`relative transition-all duration-1000 delay-300 ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                }`}
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl ring-4 ring-primary/20">
                  <Image
                    src="/quebre-o-ciclo-hero-mockup.png"
                    alt="Quebre o Ciclo - eBook Cover"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute right-4 top-4">
                    <div className="rounded-full bg-primary px-4 py-2 shadow-lg">
                      <div className="text-center">
                        <div className="text-xs font-semibold text-primary-foreground">ECONOMIZE</div>
                        <div className="text-2xl font-extrabold text-primary-foreground">73%</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 -z-10 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-b border-border bg-card py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-3">
              <div className="text-center">
                <div className="mb-2 flex items-center justify-center gap-2">
                  <Users className="h-8 w-8 text-primary" />
                  <div className="text-4xl font-bold text-card-foreground">2.500+</div>
                </div>
                <p className="text-muted-foreground">Pessoas transformadas</p>
              </div>
              <div className="text-center">
                <div className="mb-2 flex items-center justify-center gap-2">
                  <Star className="h-8 w-8 text-primary" />
                  <div className="text-4xl font-bold text-card-foreground">4.9/5</div>
                </div>
                <p className="text-muted-foreground">Avaliação média</p>
              </div>
              <div className="text-center">
                <div className="mb-2 flex items-center justify-center gap-2">
                  <BookOpen className="h-8 w-8 text-primary" />
                  <div className="text-4xl font-bold text-card-foreground">30 dias</div>
                </div>
                <p className="text-muted-foreground">Para mudança real</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="border-b border-border bg-background py-20 sm:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-balance text-3xl font-bold text-card-foreground sm:text-4xl lg:text-5xl">
                Você está preso em padrões que não te levam a lugar nenhum?
              </h2>

              <p className="mt-8 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Este guia é um mapa para sair do piloto automático e construir uma nova versão de si mesmo. Não é sobre
                motivação temporária — é sobre mudança real e sustentável.
              </p>

              <div className="mt-12 rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-accent/30 to-primary/5 p-8 shadow-lg sm:p-12">
                <p className="text-balance text-2xl font-semibold italic leading-relaxed text-foreground sm:text-3xl">
                  "A consciência é o primeiro passo. Você não pode mudar o que não reconhece."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="border-b border-border bg-background py-20 sm:py-28" id="conteudo">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="text-balance text-4xl font-bold text-foreground sm:text-5xl">O Que Você Vai Aprender</h2>
              <p className="mt-4 text-pretty text-xl text-muted-foreground">
                6 capítulos práticos para transformar sua vida
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {chapters.map((chapter, index) => {
                const Icon = chapter.icon
                return (
                  <Card
                    key={chapter.title}
                    className="group overflow-hidden border-2 transition-all duration-300 hover:scale-105 hover:border-primary hover:shadow-xl"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={chapter.image || "/placeholder.svg"}
                        alt={chapter.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary shadow-lg">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="mb-2 text-sm font-semibold text-primary">Capítulo {index + 1}</div>
                      <h3 className="mb-3 text-xl font-bold text-card-foreground">{chapter.title}</h3>
                      <p className="leading-relaxed text-muted-foreground">{chapter.desc}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="border-b border-border bg-card py-20 sm:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="text-balance text-4xl font-bold text-card-foreground sm:text-5xl">
                O Que Dizem Quem Já Transformou
              </h2>
              <p className="mt-4 text-pretty text-xl text-muted-foreground">
                Histórias reais de pessoas que quebraram o ciclo
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={testimonial.name}
                  className="border-2 transition-all duration-300 hover:border-primary hover:shadow-lg"
                >
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-primary/20">
                        <Image
                          src={
                            index === 0
                              ? "/maria-silva-testimonial.jpg"
                              : index === 1
                                ? "/joao-santos-testimonial.jpg"
                                : "/ana-costa-testimonial.jpg"
                          }
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                    <div className="mb-4 flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="mb-6 leading-relaxed text-muted-foreground italic">"{testimonial.content}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pillars Section */}
        <section className="border-b border-border bg-background py-20 sm:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="text-balance text-4xl font-bold text-card-foreground sm:text-5xl">
                Os Três Pilares da Transformação
              </h2>
              <p className="mt-4 text-pretty text-xl text-muted-foreground">
                O sistema completo para mudança duradoura
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {pillars.map((pillar, index) => (
                <div key={pillar.title} className="relative">
                  <Card className="group h-full overflow-hidden border-2 transition-all duration-300 hover:border-primary hover:shadow-lg">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={pillar.image || "/placeholder.svg"}
                        alt={pillar.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                      <div className="absolute bottom-4 left-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-3xl font-bold text-primary-foreground shadow-lg">
                        {index + 1}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="mb-4 text-2xl font-bold text-card-foreground">{pillar.title}</h3>
                      <p className="leading-relaxed text-muted-foreground">{pillar.desc}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 30-Day Plan Section */}
        <section className="border-b border-border bg-card py-20 sm:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="text-balance text-4xl font-bold text-foreground sm:text-5xl">
                Seu Plano de Ação de 30 Dias
              </h2>
              <p className="mt-4 text-pretty text-xl text-muted-foreground">
                A transformação real vem da prática constante, não da perfeição
              </p>
            </div>

            <div className="mx-auto max-w-5xl">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {weeks.map((item, index) => (
                  <Card
                    key={item.week}
                    className="relative overflow-hidden border-2 transition-all duration-300 hover:scale-105 hover:border-primary hover:shadow-lg"
                  >
                    <CardContent className="p-8">
                      <div className="mb-4 text-6xl font-bold text-primary/20">{index + 1}</div>
                      <div className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary">{item.week}</div>
                      <div className="mb-3 text-2xl font-bold text-card-foreground">{item.theme}</div>
                      <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-12 rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-accent/30 to-primary/5 p-8 text-center shadow-lg">
                <p className="text-lg font-medium text-foreground">
                  Escolha 2-3 práticas e comprometa-se com elas por 30 dias.
                  <span className="block mt-2 text-muted-foreground">Consistência supera intensidade.</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bonus Section */}
        <section className="border-b border-border bg-background py-20 sm:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <Badge className="mb-4 bg-primary text-primary-foreground px-4 py-1.5">Bônus Exclusivos</Badge>
              <h2 className="text-balance text-4xl font-bold text-foreground sm:text-5xl">Receba Gratuitamente</h2>
              <p className="mt-4 text-pretty text-xl text-muted-foreground">
                Ferramentas práticas para acelerar sua transformação
              </p>
            </div>

            <div className="mx-auto max-w-4xl">
              <div className="grid gap-6 md:grid-cols-3">
                {bonuses.map((bonus) => {
                  const Icon = bonus.icon
                  return (
                    <Card
                      key={bonus.title}
                      className="border-2 border-primary/20 bg-gradient-to-br from-accent/30 to-primary/5 transition-all duration-300 hover:scale-105 hover:border-primary hover:shadow-lg"
                    >
                      <CardContent className="p-6 text-center">
                        <div className="mb-4 flex justify-center">
                          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary shadow-lg">
                            <Icon className="h-8 w-8 text-primary-foreground" />
                          </div>
                        </div>
                        <h3 className="mb-3 text-xl font-bold text-foreground">{bonus.title}</h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">{bonus.desc}</p>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="border-b border-border bg-card py-20 sm:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="text-balance text-4xl font-bold text-card-foreground sm:text-5xl">Perguntas Frequentes</h2>
              <p className="mt-4 text-pretty text-xl text-muted-foreground">
                Tudo o que você precisa saber antes de começar
              </p>
            </div>

            <div className="mx-auto max-w-3xl space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="border-2 transition-all duration-300 hover:border-primary">
                  <CardContent className="p-0">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-accent/50"
                    >
                      <span className="text-lg font-semibold text-card-foreground">{faq.question}</span>
                      <ChevronDown
                        className={`h-5 w-5 text-muted-foreground transition-transform ${
                          openFaq === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openFaq === index && (
                      <div className="border-t border-border px-6 pb-6 pt-4">
                        <p className="leading-relaxed text-muted-foreground">{faq.answer}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-gradient-to-b from-background to-accent/20 py-20 sm:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 flex justify-center">
                <div className="relative w-full">
                  <Image
                    src="/quebre-o-ciclo-final-banner-v2.png"
                    alt="Libere-se dos padrões que te prendem - Quebre o Ciclo"
                    width={1600}
                    height={900}
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                </div>
              </div>

              <div className="text-center">
                <div className="mt-12 mx-auto max-w-md rounded-2xl border-2 border-primary bg-gradient-to-br from-primary/10 to-accent/20 p-8 shadow-2xl">
                  <div className="mb-4 flex items-center justify-center gap-3">
                    <span className="text-2xl text-muted-foreground line-through">R$ 110,00</span>
                    <Badge className="bg-destructive text-destructive-foreground text-base px-3 py-1">-73%</Badge>
                  </div>
                  <div className="mb-2 text-center">
                    <div className="text-lg text-muted-foreground">Promoção por apenas</div>
                    <div className="text-6xl font-extrabold text-primary">R$ 29,99</div>
                  </div>
                  <div className="mt-4 flex items-center justify-center gap-2 text-base font-medium text-foreground">
                    <Zap className="h-5 w-5 text-primary" />
                    Pagamento via PIX • Acesso Instantâneo
                  </div>
                </div>

                <div className="mt-8 flex flex-col items-center justify-center gap-6 sm:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="h-16 px-10 text-xl shadow-2xl transition-all hover:scale-105 hover:shadow-primary/50"
                  >
                    <a href={checkoutLink} className="flex items-center gap-2">
                      Comprar Agora por R$ 29,99
                      <ArrowRight className="h-6 w-6" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="h-16 border-2 px-10 text-xl bg-transparent">
                    <a href="#conteudo">Ver Sumário</a>
                  </Button>
                </div>

                <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Zap className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">Pagamento via PIX</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Download className="h-5 w-5 text-primary" />
                    <span className="text-sm">Acesso Imediato</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="text-sm">Disponível 24/7</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Shield className="h-5 w-5 text-primary" />
                    <span className="text-sm">Garantia de 5 Dias</span>
                  </div>
                </div>

                <div className="mt-10 flex flex-col items-center gap-4">
                  <div className="flex items-center gap-3 text-lg">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                    <span className="font-semibold text-foreground">Garantia incondicional de 5 dias</span>
                  </div>
                  <p className="text-base text-muted-foreground">
                    Se não estiver satisfeito, solicite reembolso total — sem perguntas, sem complicações
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground sm:px-6 lg:px-8">
          © {new Date().getFullYear()} Quebre o Ciclo. Todos os direitos reservados.
        </div>
      </footer>

      {/* Floating Action Button */}
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
          showFloatingButton ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
        }`}
      >
        <Button
          asChild
          size="lg"
          className="h-16 px-6 shadow-2xl transition-all hover:scale-110 hover:shadow-primary/50 animate-pulse"
        >
          <a href={checkoutLink} className="flex items-center gap-3">
            <div className="flex flex-col items-start">
              <span className="text-sm font-semibold">Quebre o ciclo</span>
              <span className="text-xs opacity-90">por apenas R$ 29,99</span>
            </div>
            <Zap className="h-5 w-5" />
          </a>
        </Button>
      </div>
    </div>
  )
}
