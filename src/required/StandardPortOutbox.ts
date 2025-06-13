import { InterfacePort } from '../provided/InterfacePort';
import { PortOutbox } from './PortOutbox';

/**
 * StandardPortOutbox (Caixa de Saída Padrão de Porto)
 * 
 * Especialização abstrata de PortOutbox voltada ao envio de invocação de 
 * operações requeridas a exatamente um componente. Seu único atributo é 
 * voltado a apontar o porto a que se destinam as invocações.
 * 
 * Esta implementação é ideal para comunicação ponto-a-ponto entre componentes,
 * onde cada caixa de saída se conecta a um único porto externo.
 * 
 * @abstract Esta classe deve ser estendida para implementar comportamentos específicos
 */
export abstract class StandardPortOutbox extends PortOutbox {
    /** Porta externa à qual esta caixa de saída está conectada */
    protected externalPort: InterfacePort | null = null;

    /**
     * Conecta esta caixa de saída a um porto externo.
     * 
     * Estabelece uma conexão direta com um único porto de interface,
     * permitindo comunicação unidirecional com o componente associado.
     * 
     * @param externalPort - O porto externo ao qual se conectar
     */
    public connect(externalPort: InterfacePort): void {
        this.externalPort = externalPort;
    }
    
    /**
     * Desconecta esta caixa de saída do porto externo.
     * 
     * Remove a conexão com o porto externo, efetivamente isolando
     * esta caixa de saída de qualquer comunicação externa.
     */
    public disconnect(): void {
        this.externalPort = null;
    }
}