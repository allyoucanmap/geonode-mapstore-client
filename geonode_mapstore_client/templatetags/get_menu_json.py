from django import template
from geonode.base.models import Menu, MenuItem

register = template.Library()

@register.simple_tag
def get_menu_json(placeholder_name):
    menus = {
        m: MenuItem.objects.filter(menu=m).order_by('order')
        for m in Menu.objects.filter(placeholder__name=placeholder_name)
    }
    ms = []
    for menu, menu_items in menus.items():
        if len(menu_items) > 1:
            m = {}
            m['label'] = menu.title
            m['type'] = 'dropdown'
            m['items'] = []
            for menu_item in menu_items:
                m_item = {}
                m_item['type'] = 'link'
                m_item['href'] = menu_item.url
                m_item['label'] = menu_item.title
                if menu_item.blank_target:
                    m_item['target'] = '_blank'
                m['items'].append(m_item)

            ms.append(m)
        if len(menu_items) == 1:
            menu_items_0 = menu_items[0]
            m = {}
            m['type'] = 'link'
            m['href'] = menu_items_0.url
            m['label'] = menu_items_0.title
            if menu_items_0.blank_target:
                m['target'] = '_blank'
            ms.append(m)
    return ms
