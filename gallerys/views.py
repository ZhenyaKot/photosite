from django.shortcuts import render, get_object_or_404

from gallerys.models import Photoshoot, Photo, Categories


# Create your views here.

def catalog(request, category_slug=None):
    category = get_object_or_404(Categories, slug=category_slug)
    photoshoots = Photoshoot.objects.filter(category=category)
    first_photos = []
    for photoshoot in photoshoots:
        first_photo = photoshoot.photos.first()
        if first_photo:
            first_photos.append(first_photo)

    context = {
        'first_photos': first_photos,
    }

    return render(request, 'gallerys/catalog.html', context=context)


def photo(request, photoshoot_slug=None):
    photoshoot = get_object_or_404(Photoshoot, slug=photoshoot_slug)
    photos = Photo.objects.filter(photoshoot=photoshoot)
    context = {
        'photoshoot': photoshoot,
        'photos': photos,
    }

    return render(request, 'gallerys/photo.html', context)


def genre(request):
    first_photos_id_1 = []
    first_photos_id_2 = []
    first_photos_id_3 = []
    first_photos_id_4 = []
    for index in range(1, 5):
        photoshoots = Photoshoot.objects.filter(category=index)

        for photoshoot in photoshoots:
            first_photo = photoshoot.photos.first()
            if first_photo:
                if index == 1:
                    first_photos_id_1.append(first_photo)
                elif index == 2:
                    first_photos_id_2.append(first_photo)
                elif index == 3:
                    first_photos_id_3.append(first_photo)
                else:
                    first_photos_id_4.append(first_photo)

    context = {
        'first_photos_id_1': first_photos_id_1,
        'first_photos_id_2': first_photos_id_2,
        'first_photos_id_3': first_photos_id_3,
        'first_photos_id_4': first_photos_id_4,
    }

    return render(request, 'gallerys/genre.html', context)
