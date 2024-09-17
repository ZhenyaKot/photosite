from django.shortcuts import render, get_object_or_404

from gallerys.models import Photoshoot, Photo, Categories


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
    photoshoots_id_1 = Photoshoot.objects.filter(category_id=1)
    first_photos_id_1 = []

    for photoshoot in photoshoots_id_1:
        first_photo = photoshoot.photos.first()
        if first_photo:
            first_photos_id_1.append(first_photo)

    photoshoots_id_2 = Photoshoot.objects.filter(category_id=2)
    first_photos_id_2 = []

    for photoshoot in photoshoots_id_2:
        first_photo = photoshoot.photos.first()
        if first_photo:
            first_photos_id_2.append(first_photo)


    photoshoots_id_3 = Photoshoot.objects.filter(category_id=3)
    first_photos_id_3 = []

    for photoshoot in photoshoots_id_3:
        first_photo = photoshoot.photos.first()
        if first_photo:
            first_photos_id_3.append(first_photo)

    photoshoots_id_4 = Photoshoot.objects.filter(category_id=4)
    first_photos_id_4 = []

    for photoshoot in photoshoots_id_4:
        first_photo = photoshoot.photos.first()
        if first_photo:
            first_photos_id_4.append(first_photo)

    context = {
        'first_photos_id_1': first_photos_id_1,
        'first_photos_id_2': first_photos_id_2,
        'first_photos_id_3': first_photos_id_3,
        'first_photos_id_4': first_photos_id_4,
    }

    return render(request, 'gallerys/genre.html', context)
