Ext.define('NAF.view.Map', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.map',
    title: 'Kart',

    items: [
        {
            xtype: 'textfield',
            hideLabel: true,
            flex: 1
        },
        {
            xtype: 'label',
            forId: 'myFieldId',
            text: 'My Awesome Field',
            margins: '0 0 0 10'
        }
    ]
});