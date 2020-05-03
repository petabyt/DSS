#ifndef ABOUT_H
#define ABOUT_H

#include <QDialog>

namespace Ui {
class About;
}

class About : public QDialog
{
    Q_OBJECT
    Q_PROPERTY(QString language READ language WRITE setLanguage NOTIFY languageChanged);

public:
    explicit About(QWidget *parent = 0);
    ~About();

    QString language()
    {
        return m_Language;
    }

    void setLanguage(QString lang);

signals:
    void languageChanged();

private slots:
    void storeSettings();
    void selectLanguage(int);

private:
    Ui::About *ui;
    QString m_Language;
};

#endif // ABOUT_H
