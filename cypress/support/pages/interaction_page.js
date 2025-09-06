/// <reference types="cypress" />

export default {
    text: { sortable: 'Sortable' },
    el: {
        tabList: '#demo-tab-list',
        items: '.vertical-list-container .list-group-item', 
    },

    goToSortable() {
        cy.contains(this.text.sortable).click();
        cy.get(this.el.tabList).click();
    },
    sortListDescending() {
        const expected = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];
        expected.forEach((label, index) => {
            cy.contains(this.el.items, new RegExp(`^${label}$`))
                .scrollIntoView()
                .then(($from) => {
                    const f = $from[0].getBoundingClientRect();
                    const fx = Math.round(f.x + f.width / 2);
                    const fy = Math.round(f.y + f.height / 2);
                    cy.get(this.el.items).eq(index).then(($to) => {
                        const t = $to[0].getBoundingClientRect();
                        const tx = Math.round(t.x + t.width / 2);
                        const goingUp = fy > (t.y + t.height / 2);
                        const tyDrop = Math.round(goingUp ? (t.y - 12) : (t.y + t.height + 12));
                        cy.wrap($from)
                            .trigger('pointerdown', { button: 0, buttons: 1, pointerId: 1, clientX: fx, clientY: fy, force: true })
                            .trigger('mousedown', { button: 0, which: 1, clientX: fx, clientY: fy, force: true });

                        cy.get('body')
                            .trigger('pointermove', { pointerId: 1, buttons: 1, clientX: fx, clientY: fy + (goingUp ? -8 : 8), force: true })
                            .trigger('mousemove', { buttons: 1, clientX: fx, clientY: fy + (goingUp ? -8 : 8), force: true })
                            .wait(16);

                        const steps = 8;
                        for (let i = 1; i <= steps; i++) {
                            const x = Math.round(fx + (tx - fx) * (i / steps));
                            const y = Math.round(fy + (tyDrop - fy) * (i / steps));
                            cy.get('body')
                                .trigger('pointermove', { pointerId: 1, buttons: 1, clientX: x, clientY: y, force: true })
                                .trigger('mousemove', { buttons: 1, clientX: x, clientY: y, force: true })
                                .wait(16);
                        }

                        cy.get('body')
                            .trigger('pointerup', { pointerId: 1, clientX: tx, clientY: tyDrop, force: true })
                            .trigger('mouseup', { clientX: tx, clientY: tyDrop, force: true });

                        cy.wait(50);
                    });
                });
        });
    },

    expectListDescending() {
        const expected = ['Six', 'Five', 'Four', 'Three', 'Two', 'One'];
        cy.get(this.el.items).then(($lis) => {
            const texts = [...$lis].map(li => li.innerText.trim());
            expect(texts).to.deep.equal(expected);
        });
    },
};
