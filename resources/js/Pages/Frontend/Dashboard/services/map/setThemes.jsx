import * as am5 from "@amcharts/amcharts5";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

export function setThemes(root) {
    root.setThemes([am5themes_Animated.new(root)]);
}
