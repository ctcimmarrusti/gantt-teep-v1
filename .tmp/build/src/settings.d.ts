import { formattingSettings } from "powerbi-visuals-utils-formattingmodel";
import FormattingSettingsCard = formattingSettings.Card;
import FormattingSettingsSlice = formattingSettings.Slice;
import FormattingSettingsModel = formattingSettings.Model;
export declare class VisualSettingsModel extends FormattingSettingsModel {
    event: EventSettings;
    category: CategorySettings;
    general: GeneralSettings;
    cards: FormattingSettingsCard[];
}
export declare class EventSettings extends FormattingSettingsCard {
    eventFontColor: formattingSettings.ColorPicker;
    fontColorOverride: formattingSettings.ToggleSwitch;
    eventFontSize: formattingSettings.NumUpDown;
    eventTextRotation: formattingSettings.NumUpDown;
    waterfall: formattingSettings.ToggleSwitch;
    name: string;
    displayName: string;
    slices: FormattingSettingsSlice[];
}
export declare class CategorySettings extends FormattingSettingsCard {
    categoryFontSize: formattingSettings.NumUpDown;
    categoryTextRotation: formattingSettings.NumUpDown;
    categoryGrayScale: formattingSettings.ToggleSwitch;
    name: string;
    displayName: string;
    slices: FormattingSettingsSlice[];
}
export declare class GeneralSettings extends FormattingSettingsCard {
    markCurrentDay: formattingSettings.ToggleSwitch;
    name: string;
    displayName: string;
    slices: FormattingSettingsSlice[];
}
