from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def index(request):
    #return HttpResponse("")
    return render(request, "test.html")

def pagina(request):
    return render(request, "pagina01.html")
