import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Sítio Sonho Nosso | Cestas da Roça", description: "Cestas de produtos frescos direto da roça em Ponte Nova, MG. Faça seu pedido pelo WhatsApp." };
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="pt-BR"><body>{children}</body></html>}