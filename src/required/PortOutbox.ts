/**
 * PortOutbox (Caixa de Saída de Porto)
 * 
 * Implementação abstrata de uma caixa de saída que é o elemento da estrutura 
 * associado ao porto, responsável por invocar as operações requeridas pelo 
 * componente de elemento externo a ele conectado.
 * 
 * Esta classe serve como base para diferentes tipos de caixas de saída:
 * - StandardPortOutbox: para comunicação com um único componente
 * - BroadcastPortOutbox: para comunicação com múltiplos componentes
 * - NonComponentPortOutbox: para comunicação com referências não-componente
 * 
 * @abstract Esta classe deve ser estendida para implementar comportamentos específicos
 */
export abstract class PortOutbox {
    /**
     * Desconecta a caixa de saída de todos os componentes externos.
     * 
     * Este método deve ser implementado pelas classes filhas para realizar
     * a limpeza adequada das conexões estabelecidas.
     * 
     * @abstract
     */
    abstract disconnect(): void;
}