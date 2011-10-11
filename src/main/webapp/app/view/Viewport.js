Ext.define('NAF.view.Viewport', {
    extend: 'Ext.container.Viewport',

    layout: 'border',
    items: [ {
        region: 'west',
        xtype: 'search',
        collapsible: true,
        width: 150
        // could use a TreePanel or AccordionLayout for navigational items
    }, {
        region: 'center',
        xtype: 'map'
    }]




});
