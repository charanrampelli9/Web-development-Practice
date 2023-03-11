class person:
    def __init__(self,yob,gender):
        self.yob=yob
        self.gender=gender
    def age(self):
        return (2023 - self.yob)
    def caterogery(self):
        if self.gender=="M" :
            if int(self.age()) >= 18 and int(self.age()) < 60:
                return "Adult"
            elif self.age() < 18:
                return "Kid"
            else:
                return "Oldman"
        if self.gender=="W" :
            if self.age() >= 18 and self.age() < 60:
                return "Adult"
            elif self.age() < 18:
                return "Kid"
            else:
                return "Oldwomen"
        # return self.age()
        
class Ischild(person):
    def age_2():
        print(super().age)
    

charan= person(2001,"M")
praveen=Ischild(2010,"M")
samatha=person(1950,"W")
print(charan.age())
print(charan.caterogery())
print(samatha.caterogery())
praveen.age_2()