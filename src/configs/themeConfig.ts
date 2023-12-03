import { PaletteMode, ColorScales } from '@/common/types/theme'


type ThemeConfig = {
  mode: PaletteMode;
  color: ColorScales
  // routingLoader: boolean;
//   navigationSize: number;
  // responsiveFontSizes: boolean;
  // disableRipple: boolean;
};

// 一些默认主题配置
// Some default theme configurations
const themeConfig: ThemeConfig = {
	// ** Palette mode
	mode: 'light' /* light | dark */,
	color: 'sage' /* blue | ruby | 'sage' */,

	// ** Routing Configs
	// routingLoader: true /* true | false */,

	// ** Navigation (Menu) Configs
	// navigationSize: 220 /* Number in PX(Pixels) */,

	// ** Other Configs 响应式式字体
	// responsiveFontSizes: true /* true | false */,

	// 涟漪效果，为true可以禁用
	// disableRipple: false /* true | false */,
}

export default themeConfig
