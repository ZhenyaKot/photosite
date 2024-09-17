from django.contrib import admin

from gallerys.models import Categories, Photoshoot, Photo


class PhotoInLine(admin.TabularInline):
    model = Photo
    extra = 1


@admin.register(Categories)
class CategoriesAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug')
    prepopulated_fields = {'slug': ('name',)}


@admin.register(Photoshoot)
class PhotoshootAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug', 'shooting_date')
    prepopulated_fields = {'slug': ('name',)}
    inlines = [PhotoInLine]


@admin.register(Photo)
class PhotoAdmin(admin.ModelAdmin):
    list_display = ('photoshoot', 'image')
