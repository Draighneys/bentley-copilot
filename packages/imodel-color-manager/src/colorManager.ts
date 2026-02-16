// colorManager.ts
export class ColorManager {
  private colors: Map<string, any>; // Replace 'any' with your specific Struct type

  constructor() {
    this.colors = new Map();
  }

  public addColor(elementId: string, color: any): void { // Replace 'any' with specific type
    this.colors.set(elementId, color);
  }

  public getColor(elementId: string): any | undefined { // Replace 'any' with specific type
    return this.colors.get(elementId);
  }

  public removeColor(elementId: string): void {
    this.colors.delete(elementId);
  }

  public updateColor(elementId: string, color: any): void { // Replace 'any' with specific type
    if (this.colors.has(elementId)) {
      this.colors.set(elementId, color);
    }
  }

  // Method to retrieve color using the .$-> operator
  public getColorWithOperator(elementId: string): any | undefined {
    // Implement the logic for the .$-> operator here
  }
}