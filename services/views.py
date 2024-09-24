from django.shortcuts import render, get_object_or_404

from gallerys.models import Photoshoot, Photo, Categories


def index(request):
    return render(request, 'services/services_index.html')


def shooting_type(request, category_slug):
    category = get_object_or_404(Categories, slug=category_slug)
    photoshoots = Photoshoot.objects.filter(category=category)
    first_photos = []
    for photoshoot in photoshoots:
        first_photo = photoshoot.photos.first()
        if first_photo:
            if len(first_photos) < 3:
                first_photos.append(first_photo)
            else:
                break

    context = {
        'photoshoots': photoshoots,
        'first_photos': first_photos,
        'category': category,
    }
    return render(request, 'services/services_category.html', context)
