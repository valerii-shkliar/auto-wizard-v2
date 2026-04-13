import AirConditionIcon from '@/features/services/components/category-icons/AirConditionIcon';
import DiagnosticsIcon from '@/features/services/components/category-icons/DiagnosticsIcon';
import ElectronicsIcon from '@/features/services/components/category-icons/ElectronicsIcon';
import EngineIcon from '@/features/services/components/category-icons/EngineIcon';
import MaintenanceServiceIcon from '@/features/services/components/category-icons/MaintenanceServiceIcon';
import RunningGearIcon from '@/features/services/components/category-icons/RunningGearIcon';
import TireIcon from '@/features/services/components/category-icons/TireIcon';
import TransmissionIcon from '@/features/services/components/category-icons/Transmission';

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
