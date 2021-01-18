const profile = {
  namee: 'Nim',
  age: 20,
  isHuman: true,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number } = profile;
const { namee, isHuman }: { namee: string; isHuman: boolean } = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
