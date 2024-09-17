from django.shortcuts import render, get_object_or_404

from gallerys.models import Photoshoot, Photo


# Create your views here.

def catalog(request):
    return render(request, 'gallerys/catalog.html')


def photo(request, photoshoot_id):
    photoshoot = get_object_or_404(Photoshoot, id=photoshoot_id)
    photos = Photo.objects.filter(photoshoot=photoshoot)
    context = {
        'photoshoot': photoshoot,
        'photos': photos,
    }

    return render(request, 'gallerys/photo.html', context)


def genre(request):
    return render(request, 'gallerys/genre.html')
