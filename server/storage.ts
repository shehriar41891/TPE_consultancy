import type { Inquiry, InsertInquiry } from "@shared/schema";

export interface IStorage {
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
}

class InMemoryStorage implements IStorage {
  private inquiries: Inquiry[] = [];
  private nextId = 1;

  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const inquiry: Inquiry = {
      id: this.nextId++,
      ...insertInquiry,
      createdAt: new Date(),
    };
    this.inquiries.push(inquiry);
    return inquiry;
  }
}

export const storage = new InMemoryStorage();
