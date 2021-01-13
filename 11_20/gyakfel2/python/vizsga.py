def korTerulet(r):
    return r*r*3.14

def korKerulet(r):
    return 2*r*3.14

def negyzetKerulet(a):
    return 4*a

def teglalapTerulet(a,b):
    return a*b


sik = input("Add meg a síkidomot: ")
if sik == "négyzet":
    a = int(input("Add meg az oldalát: "))
    print(f"A négyzet kerület: {negyzetKerulet(a)}")