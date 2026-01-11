import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTypography,
    presetUno,
    presetWebFonts,
    transformerVariantGroup,
    transformerDirectives,
} from 'unocss'

export default defineConfig({
    shortcuts: [
        ['text-gradient', 'bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent'],
        ['text-gradient-gold', 'bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent'],
        ['text-gradient-saudi', 'bg-gradient-to-r from-emerald-500 via-green-400 to-emerald-500 bg-clip-text text-transparent'],
        ['glass', 'bg-white/5 backdrop-blur-xl border border-white/10'],
        ['glass-dark', 'bg-black/20 backdrop-blur-xl border border-white/5'],
        ['border-gradient', 'relative bg-gradient-to-br from-[#0a0a0a] to-[#0a1a0f] rounded-1rem'],
        ['hero-gradient', 'bg-[radial-gradient(ellipse_at_top,_rgba(0,108,53,0.15)_0%,_transparent_50%),_radial-gradient(ellipse_at_bottom_right,_rgba(201,162,39,0.1)_0%,_transparent_50%),_linear-gradient(180deg,_#0a0a0a_0%,_#0a1510_100%)]'],
        ['grid-pattern', 'bg-[linear-gradient(rgba(0,108,53,0.05)_1px,_transparent_1px),_linear-gradient(90deg,_rgba(0,108,53,0.05)_1px,_transparent_1px)] bg-[length:50px_50px]'],
        ['dot-pattern', 'bg-[radial-gradient(rgba(124,58,237,0.15)_1px,_transparent_1px)] bg-[length:20px_20px]'],
    ],
    theme: {
        colors: {
            saudi: {
                green: '#006C35',
                gold: '#C9A227',
                cream: '#F5E6D3',
            },
        },
        fontFamily: {
            cairo: 'Cairo, sans-serif',
            tajawal: 'Tajawal, sans-serif',
        },
    },
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
            scale: 1.2,
            warn: true,
        }),
        presetTypography(),
        presetWebFonts({
            fonts: {
                cairo: 'Cairo:400,700',
                tajawal: 'Tajawal:400,700',
            },
        }),
    ],
    transformers: [
        transformerVariantGroup(),
        transformerDirectives(),
    ],
})
