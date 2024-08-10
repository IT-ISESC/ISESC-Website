import { type VariantProps, tv } from 'tailwind-variants'

const tagVariants = tv({
  base: "inline-flex items-center justify-center whitesapce-nowrap rounded-md text-xs font-medium gap-2",
  variants: {
    variant: {
      default: "bg-secondary-red text-white hover:bg-primary-red/90",
      innovation: "bg-yellow-800 text-white hover:bg-yellow-800/90",
      competition: "bg-amber-800 text-white hover:bg-amber-800/90",
      case: "bg-secondary-red text-white hover:bg-primary-red/90",
      hackathon: "bg-violet-900 text-white hover:bg-violet-900/90",
    },
    size: {
			default: "h-5 rounded-lg py-2 px-2",
			sm: "h-9 rounded-xl px-3",
			lg: "h-11 rounded-xl px-8",
			icon: "h-10 w-10",
    }

  },
  defaultVariants: {
    variant: 'default',
    size: 'default'
  }
})

type Variant = VariantProps<typeof tagVariants>["variant"]
type Size = VariantProps<typeof tagVariants>["size"]

type Props = {
  variant?: Variant;
  size?: Size;
  closable?: boolean;
  closeCallback?: (v: Variant) => void;
}

export {
  type Props as TagProps,
  type Variant as TagVariant,
  tagVariants,
}
