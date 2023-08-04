export class DayOfWeek {
  public static readonly MONDAY = new DayOfWeek('MONDAY');
  public static readonly TUESDAY = new DayOfWeek('TUESDAY');
  public static readonly WEDNESDAY = new DayOfWeek('WEDNESDAY');
  public static readonly THURSDAY = new DayOfWeek('THURSDAY');
  public static readonly FRIDAY = new DayOfWeek('FRIDAY');
  public static readonly SATURDAY = new DayOfWeek('SATURDAY');
  public static readonly SUNDAY = new DayOfWeek('SUNDAY');

  private constructor(public readonly value: string) {}

  public toString(): string {
    return this.value;
  }
}
