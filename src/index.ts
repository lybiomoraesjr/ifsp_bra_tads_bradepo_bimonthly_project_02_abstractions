// Component Interface Pattern - Abstrações para Desenvolvimento de Componentes
// IFSP Bra - TADS - BRADEPO - Projeto Bimestral 02

// Provided Interfaces (Interfaces Fornecidas)
export { ComponentInterface } from './provided/ComponentInterface';
export { InterfacePort } from './provided/InterfacePort';

// Required Interfaces (Interfaces Requeridas)
export { PortOutbox } from './required/PortOutbox';
export { StandardPortOutbox } from './required/StandardPortOutbox';
export { BroadcastPortOutbox } from './required/BroadcastPortOutbox';
export { NonComponentPortOutbox } from './required/NonComponentPortOutbox';

// Type definitions for better TypeScript support
export type { ComponentInterface as IComponentInterface } from './provided/ComponentInterface';
export type { InterfacePort as IInterfacePort } from './provided/InterfacePort';
export type { PortOutbox as IPortOutbox } from './required/PortOutbox'; 