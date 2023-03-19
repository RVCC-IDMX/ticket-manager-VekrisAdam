## Introduction
#### The Ticket Manager is capable of accepting an amount of tickets and allowing consumers to buy those tickets. The App will prevent anymore consumers from attempting to buy tickets if there are no more tickets in supply. Listeners are used to provide literal feedback to the console and event emitters are used to make events when error or buy actions occur. A database and email services simulate sending an email to the consumer and saving data to a database.

![buy](/images/Ticket Manager - buy.jpg)

## Instructions
#### ticketManager.buy(email, price); - This code accepts the email of the buyer and the price they are paying for tickets and will cause a response from all listeners with the 'buy' identifying string, including the database and email services.
#### ticketManager.on(string, () => {}) - This code is a listener that will perform code in its callback function if an emit event occurs under the matching identifying string.
#### ticketManager.listenerCount(string); - This code accepts an identifying string for listeners and returns the amount of listeners associated with that string.

![listenerCount](/images/Ticket Manager - listenerCount.jpg)

#### ticketManager.off(string, variable); - This code accepts an identifying string for listeners and a variable containing a callback function relating to the listener. The listener will be removed from the event emitter.
#### ticketManager.removeAllListeners(string); - This code accepts an identifying string for listeners. All listeners with the matching identifying string will be removed from the event emitter.