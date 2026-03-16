import AirConditionIcon from '@/components/category-icons/AirConditionIcon';
import DiagnosticsIcon from '@/components/category-icons/DiagnosticsIcon';
import ElectronicsIcon from '@/components/category-icons/ElectronicsIcon';
import EngineIcon from '@/components/category-icons/EngineIcon';
import MaintenanceServiceIcon from '@/components/category-icons/MaintenanceServiceIcon';
import RunningGearIcon from '@/components/category-icons/RunningGearIcon';
import TireIcon from '@/components/category-icons/TireIcon';
import TransmissionIcon from '@/components/category-icons/Transmission';

export const CATEGORIES_ICONS = {
  'Air condition': AirConditionIcon,
  diagnostics: DiagnosticsIcon,
  Electrics: ElectronicsIcon,
  Engine: EngineIcon,
  'Maintenance service': MaintenanceServiceIcon,
  'Running gear': RunningGearIcon,
  'Tire service': TireIcon,
  Transmission: TransmissionIcon,
} as const;
