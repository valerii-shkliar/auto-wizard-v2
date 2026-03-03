import airConditionIcon from '../../public/icons/categories/air-condition.svg';
import diagnosticsIcon from '../../public/icons/categories/diagnostics.svg';
import electricsIcon from '../../public/icons/categories/electrics.svg';
import engineIcon from '../../public/icons/categories/engine.svg';
import maintenanceServiceIcon from '../../public/icons/categories/maintenance-service.svg';
import runningGearIcon from '../../public/icons/categories/running-gear.svg';
import tireIcon from '../../public/icons/categories/tire.svg';
import transmissionIcon from '../../public/icons/categories/transmission.svg';

export const CATEGORIES_ICONS = {
  'Air condition': airConditionIcon,
  Diagnostics: diagnosticsIcon,
  Electrics: electricsIcon,
  Engine: engineIcon,
  'Maintenance service': maintenanceServiceIcon,
  'Running gear': runningGearIcon,
  'Tire service': tireIcon,
  Transmission: transmissionIcon,
} as const;
