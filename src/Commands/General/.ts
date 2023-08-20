handleState = async (): Promise<void> => {
       const text = `🚀 Connecting...`;
       const { subject } = await this.client.groupMetadata(vonstrucker)
       await this.client.sendMessage({text} as unknown as AnyMessageContent)
    }
    sendReconnectMessage = async (): Promise<void> => {
       const text = `🚀 Connected`;
       const { subject } = await this.client.groupMetadata(vonstrucker)
       await this.client.sendMessage({text} as unknown as AnyMessageContent)
