/* Blink LED and send a message
   to a server on a Raspberry Pi
*/

const int ledPin = 13;  // LED connected to digital pin 13

void setup()
{
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600);
}

void loop()
{
  
  digitalWrite(ledPin, HIGH);       // Set the LED on
  Serial.println("Hello, World!");  // Print message to the Serial Port
  delay(1000);                      // Wait for two seconds
  digitalWrite(ledPin, LOW);        // Set the LED off
  delay(1000);                      // Wait for two seconds
  
}  
  
